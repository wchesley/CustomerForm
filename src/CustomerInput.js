/*
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
  </div>
*/
var btnText = "submit";
const FormInput = (props) => {
    return React.createElement('div', { className: "form-group" },
        [
            React.createElement('label',
                {
                    htmlFor: "customerEmail"
                },
                "Email address: "
            ),
            React.createElement('input',
                {
                    className: "form-control",
                    type: "email",
                    id: "customerEmail",
                    placeholder: "Enter email"
                },
            ),
            React.createElement('label',
                {
                    htmlFor: "customerZip"
                },
                "Zip Code: "
            ),
            React.createElement('input',
                {
                    className: "form-control",
                    type: "text",
                    id: "customerZip",
                    placeholder: "77777"
                },
            ),
            React.createElement('button',
                {
                    className: "btn btn-primary btn-lg",
                    type: "button",
                    id: "submitBtn",
                    placeholder: "Submit"
                },"Submit"
            ),
        ]
    );
};