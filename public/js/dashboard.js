const getUrlParameter = (sParam) => {
    const sPageURL = decodeURIComponent(window.location.search.substring(1));
    const sURLVariables = sPageURL.split('&');
    let sParameterName = "";

    for (let i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(() => {
    const id = getUrlParameter('id');
    const name = getUrlParameter('name');

    $('#name').text(name);

    $('#linkTest').on('click', (e) => {
        e.preventDefault();
        window.location = "/test.html?id=" + id;
    });
    $('#linkGrades').on('click', (e) => {
        e.preventDefault();
        window.location = "/grades.html?id=" + id;
    });
});