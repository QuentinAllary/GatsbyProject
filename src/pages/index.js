import React from "react";
import Layout from "../components/layout";
import HomeBig from "../components/homeBig";
import HomeSmall from "../components/homeSmall";
import ui from "../../ui.json";

let title = ui.corp.title;
let logo = ui.corp.logo;
let description = ui.corp.description;
let contributors = ui.corp.contributors;
let homepageUi = ui.custom.homepage;

export default () => (
    <Layout>
        {homepageUi === "big" ?
            (<HomeBig title={title} logo={logo} description={description} contributors={contributors}/>)
            : (<HomeSmall title={title} logo={logo} description={description} contributors={contributors}/>
            )}
    </Layout>
);
