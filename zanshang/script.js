const tabsParentContainer = document.querySelector(".tabs_parent_container");
const tabsMarker = tabsParentContainer.querySelector(".tab_marker");
const visibleTab = tabsParentContainer.querySelector(
    ".tab input:checked + label"
);
// set markers initial width
tabsMarker.style.width = `${visibleTab.offsetWidth}px`;

// listen user clicks on tabs
tabsParentContainer.addEventListener("change", (e) => {
    let input = e.target;
    let selectedTab = input.closest(".tab");
    let selectedTab_X = selectedTab.getBoundingClientRect().x;
    let headerContainer_X = tabsParentContainer
        .querySelector(".tab_header")
        .getBoundingClientRect().x;
    let difference = selectedTab_X - headerContainer_X;

    // set markers new width and position
    tabsMarker.style.left = `${difference}px`;
    tabsMarker.style.width = `${selectedTab.getBoundingClientRect().width}px`;

    // toggle visible content
    let existingVisibleContent = tabsParentContainer.querySelector(
        ".tab_content.visible"
    );
    existingVisibleContent.classList.remove("visible");
    let associatedTabContent = tabsParentContainer.querySelector(
        `.tab_content[data-associated-tab="${input.id}"]`
    );
    associatedTabContent.classList.add("visible");

    // change background color for added effect
    document.body.style.backgroundColor = `var(--background-${input.id.replace(
      "tab_",
      ""
   )})`;
});