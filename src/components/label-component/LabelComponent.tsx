import React from "react";

export class LabelComponent extends React.Component {

    constructor(props: any) {
        super(props);
    }
      
    render() {
        return (
          <div>
            <label>
              Sign up!
            </label>
          </div>
        );
    }
}