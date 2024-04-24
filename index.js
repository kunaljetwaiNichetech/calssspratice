"use strict";
const getusernamee = document.querySelector("#user");
const formsubmit = document.querySelector(".form");
// const formsubmit:HTMLFormElement|null=document.querySelector(".form") //another way to describe data type
const maincontainer = document.querySelector(".main_container");
//reusable  function
async function myCustomFetcher(url, options) {
    const Response = await fetch(url, options);
    if (!Response.ok) {
        throw new Error(`Network Response was not ok ${Response.status} `);
    }
    const data = await Response.json();
    console.log((data));
    return data;
}
const ShowresultUI = (singleUser) => {
    const { avatar_url, login, url } = singleUser;
    maincontainer.insertAdjacentHTML("beforeend", `
        <div class='card'>
            <img  src=${avatar_url} alt=${login}/>
            <hr/>
            <div class="card-footer">
                <img  src=${avatar_url} alt=${login}/>
                <a href="${url}"/>Github </a>
            </div>
        </div>
        `);
    console.log("this is working", avatar_url);
};
function fetchUserData(url) {
    myCustomFetcher(url, {}).then((UserInfo) => {
        for (const singleUser of UserInfo) {
            ShowresultUI(singleUser);
            //   console.log("single", singleUser);
        }
    });
}
fetchUserData("https://api.github.com/users");
