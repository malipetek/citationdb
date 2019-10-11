import React from "react";
import BreadCrumb from "../BreadCrumb";
import SaveButton from "../SaveButton";

export default function GenericPage(PageComponent) {


    return (props) => {
        const id = props.match.params.id

        return (<div className="GenericPage">
            <section>
                <BreadCrumb />

                <div className="page-tray">
                    {
                        props.saveType ?
                            <React.Fragment>
                                <SaveButton id={id} type={props.saveType}></SaveButton>
                            </React.Fragment>
                            : (null)
                    }
                </div>

            </section>


            <PageComponent {...props}></PageComponent>
        </div>)
    }
}