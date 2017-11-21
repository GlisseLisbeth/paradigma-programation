$( () => {
    $('#enter').on('click', (e) => {
        const username = $('#username').val();
        const password = $('#password').val();
        $('#messages').text('');
        
        if(!username.trim().length || !password.trim().length) {
            $('#messages').text('All field required');
        } else {
            const data = {
                "username": username,
                "password": password
            };

            $.post('/login', data, (response) => {
                console.log(response);
            });

            
        }
    });
});