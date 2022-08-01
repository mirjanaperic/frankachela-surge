const form = {

    init: function () {
        let url = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdVfF2dS9gz52op83jJ3FqG_P5jt1_R8T6SRHLAfufDZJ2MRg/formResponse";
        let form = document.querySelector("#form"); 

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            fetch(url, {
                method: "POST",
                mode: "no-cors",
                header: {
                    'Content-Type': 'application/json'
                },
                body: getInputData()
            })
                .then(data => {
                    document.getElementById('js-form-btn').innerText = "Gracias!";
                    document.querySelector("#name").value = '';
                    document.querySelector("#email").value = '';
                    document.querySelector("#message").value = '';
                })
                .catch(err => console.error(err));
        });

        function getInputData() {
            let dataToPost = new FormData(); 

            dataToPost.append("entry.1597614004", document.querySelector("#name").value);
            dataToPost.append("emailAddress", document.querySelector("#email").value);
            dataToPost.append("entry.1911179559", document.querySelector("#message").value);

            return dataToPost;
        }
    }
};

export default form;