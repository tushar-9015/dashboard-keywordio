import React, {useState} from "react";
import "./customForm.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function CustomForm({ type, isSubmitted, backCallback, submitCallback }) {
  // type : 'media' || 'text'
  const [form, setForm] = useState({
    heading_1: "",
    heading_2: "",
    description_1: "",
    landscapeMarketingImage: "",
    portraitMarketingImage: "",
    squareMarketingImage: "",
    videoURL: "",
    businessName: "",
    buttonLabel: "",
    websiteURL: "",
  });

  const updateForm = (field, value) => {
    setForm({ ...form, [field]: value });
    // console.log(form);
  };

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    submitCallback();
  };
  return (
    <>
      {isSubmitted && (
        <div className="modal modal-background">
          <div className="modal-content">
            <CheckCircleIcon className="icon" />
            <p>Submitted</p>
          </div>
        </div>
      )}
      <form
        className={`form ${isSubmitted ? "form-blur" : ""}`}
        onSubmit={submit}
      >
        <h2>Create Text & Media</h2>
        <div className="row row-1">
          <div className="col col-1">
            <div className="form-group">
              <label htmlFor="heading_1" className="form-label">
                Heading 01
              </label>
              <input
                id="heading_1"
                name="heading_1"
                className="form-input"
                type="text"
                placeholder="Add a heading that would make users interested"
                value={setForm.heading_1}
                onChange={(e) =>  updateForm("heading_1", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="heading_2" className="form-label">
                Heading 02
              </label>
              <input
                id="heading_2"
                value={form.heading_2}
                name="heading_2"
                className="form-input"
                type="text"
                placeholder="Add a heading that would make usrs intereste"
                onChange={(e) =>  updateForm("heading_2", e.target.value)}
              />
            </div>
          </div>
          <div className="col col-2">
            <div className="form-group">
              <label htmlFor="description_1" className="form-label">
                Description 01
              </label>
              <textarea
                className="form-input"
                id="description_1"
                name="description_1"
                value={form.description_1}
                type="text"
                placeholder="Add primary text to help users understand more about your products, services or offers"
                rows={4}
                onChange={(e) =>  updateForm("description_1", e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row row-2">
          <div className="col col-1">
            <div className="form-group">
              <label htmlFor="landscapeMarketingImage" className="form-label">
                Landscape Marketing Image (1.9:1)
              </label>
              <input
                id="landscapeMarketingImage"
                name="landscapeMarketingImage"
                className="form-input"
                type="text"
                placeholder="Add the URL of the image you want to use for the ad"
                value={form.landscapeMarketingImage}
                onChange={(e) =>
                  updateForm("landscapeMarketingImage", e.target.value)
                }
              />
            </div>
          </div>
          <div className="col col-2">
            <div className="form-group">
              <label htmlFor="portraitMarketingImage" className="form-label">
                Portrait Marketing Image (4:5)
              </label>
              <input
                id="portraitMarketingImage"
                name="portraitMarketingImage"
                className="form-input"
                type="text"
                placeholder="Add the URL of the image you want to use for the ad"
                value={form.portraitMarketingImage}
                onChange={(e) =>  updateForm("portraitMarketingImage", e.target.value)}
              />
            </div>
          </div>
          <div className="col col-3">
            <div className="form-group">
              <label htmlFor="squareMarketingImage" className="form-label">
                Square Marketing Image (1:1)
              </label>
              <input
                id="squareMarketingImage"
                name="squareMarketingImage"
                className="form-input"
                type="text"
                placeholder="Add the URL of the image you want to use for the ad"
                value={form.squareMarketingImage}
                onChange={(e) => updateForm("portraitMarketingImage", e.target.value)}
              />
            </div>
          </div>
        </div>
        {type == "media" && (
          <div className="row row-3">
            <div className="form-group">
              <label htmlFor="videoURL" className="form-label">
                Video URL
              </label>
              <input
                id="videoURL"
                name="videoURL"
                value={form.videoURL}
                onChange={(e) => setForm.videoURL(e.target.value)}
                className="form-input"
                type="text"
                placeholder="Add the URL of the video you want to use for the ad"
              />
            </div>
          </div>
        )}
        <div className="row row-4">
          <div className="col col-1">
            <div className="form-group">
              <label htmlFor="businessName" className="form-label">
                Business Name
              </label>
              <input
                id="businessName"
                value={form.businessName}
                name="businessName"
                onChange={(e) => updateForm("businessName", e.target.value)}
                className="form-input"
                type="text"
                placeholder="Add your business name"
              />
            </div>
          </div>
          <div className="col col-2">
            <div className="form-group">
              <label htmlFor="buttonLabel" className="form-label">
                Button Label
              </label>
              <select
                value={form.buttonLabel}
                className="form-select"
                name="buttonLabel"
                id="buttonLabel"
                onChange={(e) => updateForm("buttonLabel", e.target.value)}
              >
                <option value="">Select a label that best suits your ad</option>
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
                <option value="option-3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row row-5">
          <div className="form-group">
            <label htmlFor="websiteURL" className="form-label">
              Websites URL
            </label>
            <input
              id="websiteURL"
              value={form.websiteURL}
              name="websiteURL"
              className="form-input"
              type="text"
              placeholder="Add the URL of the landing page you want to redirect users to"
              onChange={(e) => updateForm('websiteURL', e.target.value)}
            />
          </div>
        </div>
        <div className="form-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={backCallback}
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default CustomForm;
