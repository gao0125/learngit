<script type="text/javascript">
    function getToken () {
        this.$http.get('/v1/tokens/gm2016001?suppress_response_code=1',{
                headers:{
                    "username":"gm2016001",
                    "password":"111111"
                }
            },
            {
                emulateJSON:true
            }).then((response)=>{
            var token=response;
            return token;
        })
    }
    export default
    {
       token,
       getToken,

    }
</script>