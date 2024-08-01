import { useEffect, useState, useRef } from "react";
import { Form } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SweetAlert from "../common/SweetAlert";
import axios from "../../utils/axios";
import Select from "react-select";
import Router from "next/router";

const Update = (props) => {
  const [data, setData] = useState({});
  const [sweetAlert, setSweetAlert] = useState({
    show: false,
    title: "",
    text: "",
    type: "default",
  });

  const FormElement = useRef(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(props.schema),
    defaultValues: data,
  });

  const handleSweetAlert = (show, title, text, type) => {
    setSweetAlert({
      show: show || false,
      title: title || sweetAlert.title,
      text: text || sweetAlert.text,
      type: type || sweetAlert.type,
    });
  };

  const onRedirect = (url) => {
    Router.push(url);
  };

  const onSubmit = async (formData) => {
    try {
      const response = await axios({
        method: props.api.update.method,
        url: props.api.update.url,
        data: formData,
      });
      handleSweetAlert(
        true,
        "Success",
        response.data?.message || "Updated Successfully",
        "success"
      );
    } catch (err) {
      const message = err.response?.data?.message || "An error occurred";
      handleSweetAlert(
        true,
        err.response?.status === 400 ? "Warning" : "Error",
        message,
        err.response?.status === 400 ? "warning" : "error"
      );
    }
  };

  const renderNestedFields = (obj, parentKey = "") => {
    return Object.keys(obj).map((key, index) => {
      const fieldKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];

      if (typeof value === "object" && !Array.isArray(value)) {
        return (
          <div key={index} className="nested-fields">
            <label>{key}</label>
            {renderNestedFields(value, fieldKey)}
          </div>
        );
      } else {
        return (
          <div className="form-group col-6 mt-2" key={index}>
            <label id={`form-element-${fieldKey}`}>{key}</label>
            <input
              className="form-control"
              id={`form-element-${fieldKey}`}
              name={fieldKey}
              type="text"
              defaultValue={value}
              {...register(fieldKey)}
            />
            <p className="text-danger mb-0">{errors[fieldKey]?.message}</p>
          </div>
        );
      }
    });
  };

  const getData = () => {
    axios
      .get(props.api.get.url)
      .then((res) => {
        const response = res.data;
        setData(response);
        const formData = {};
        props.values.forEach((value) => {
          formData[value.name] = response[value.name];
        });
        reset(formData);
        props.values.forEach((value) => {
          if (value.defaultValue !== "" && value.defaultValue !== null) {
            if (value.isMulti) {
              setValue(
                value.name,
                value.defaultValue.map((row) => row.value)
              );
            } else {
              setValue(value.name, value.defaultValue.value);
            }
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.api.get.url) {
      getData();
    }
  }, []);

  return (
    <div>
      <SweetAlert
        show={sweetAlert.show}
        title={sweetAlert.title}
        text={sweetAlert.text}
        type={sweetAlert.type}
        onConfirm={() => {
          if (sweetAlert.type === "success" && props.redirectUrl) {
            onRedirect(props.redirectUrl);
          } else if (sweetAlert.type === "success") {
            getData();
            handleSweetAlert(false);
          } else {
            handleSweetAlert(false);
          }
        }}
        onCancel={() => {
          handleSweetAlert(false);
        }}
      />
      <Form ref={FormElement} onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          {props.values.map((value, index) =>
            value.type === "select" ? (
              <div className={`form-group col-6 mt-2`} key={index}>
                <label id={`form-element-${value.name}`}>{value.label}</label>
                <Controller
                  name={value.name}
                  control={control}
                  render={({ field }) => (
                    <Select
                      isMulti={value.isMulti}
                      isClearable={true}
                      defaultValue={value.defaultValue}
                      options={value.options}
                      onChange={(e) => {
                        value.isMulti === true
                          ? setValue(
                              value.name,
                              JSON.stringify(e?.map((item) => item.value))
                            )
                          : setValue(value.name, e?.value);
                      }}
                    />
                  )}
                />
                <p className="text-danger mb-0">
                  {errors[value.name]?.message}
                </p>
              </div>
            ) : value.type === "checkbox" ? (
              <div className={`form-group col-6 mt-2`} key={index}>
                <div className="form-group form-check">
                  <input
                    name={value.name}
                    type="checkbox"
                    {...register(value.name)}
                    className={`form-check-input ${
                      errors[value.name] ? "is-invalid" : ""
                    }`}
                  />
                  <label htmlFor={value.label} className="form-check-label">
                    {value.label}
                  </label>
                  <p className="text-danger mb-0">
                    {errors[value.name]?.message}
                  </p>
                </div>
              </div>
            ) : value.type === "file" ? (
              <div className={`form-group col-6 mt-2`} key={index}>
                <label id={`form-element-${value.name}`}>{value.label}</label>
                <div className="row">
                  <div className="col-12">
                    {data[value.name] && (
                      <img
                        src={data[value.name] ? data[value.name] : ""}
                        alt={value.label}
                        className="common__image"
                      />
                    )}
                    <input
                      className="form-control"
                      id={`form-element-${value.name}`}
                      name={value.name}
                      type={value.type}
                      placeholder={value.placeholder}
                      defaultValue={data[value.name]}
                      {...register(value.name)}
                    />
                  </div>
                </div>
                <p className="text-danger mb-0">
                  {errors[value.name]?.message}
                </p>
              </div>
            ) : value.type === "json" ? (
              <div className={`form-group col-6 mt-2`} key={index}>
                <label id={`form-element-${value.name}`}>{value.label}</label>
                {typeof data[value.name] === "object" ? (
                  renderNestedFields(data[value.name], value.name)
                ) : (
                  <textarea
                    className="form-control"
                    id={`form-element-${value.name}`}
                    name={value.name}
                    type={value.type}
                    placeholder={value.placeholder}
                    defaultValue={JSON.stringify(data[value.name], null, 2)}
                    {...register(value.name)}
                  />
                )}
                <p className="text-danger mb-0">
                  {errors[value.name]?.message}
                </p>
              </div>
            ) : (
              <div
                className={`form-group ${value.customClass} mt-2`}
                key={index}
              >
                <label id={`form-element-${value.name}`}>{value.label}</label>
                <input
                  className="form-control"
                  id={`form-element-${value.name}`}
                  name={value.name}
                  type={value.type}
                  placeholder={value.placeholder}
                  defaultValue={data[value.name]}
                  {...register(value.name)}
                />
                <p className="text-danger mb-0">
                  {errors[value.name]?.message}
                </p>
              </div>
            )
          )}
        </div>

        <div className="row mt-2">
          <div className="col-md-12">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Update;
