//Post Url
const postUrl=""
//Get Url
const getUrl="https://jsonplaceholder.typicode.com/todos"


$( document ).ready(function() {
    GetAPI();
});


//Get Data from Server
const GetAPI=()=>{
    $.get(
        getUrl,
        function(data){
           
            data.forEach((item,i)=>{
                $('#DataTable').append(`
                <tr>
                <td scope="row">${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed?"Active":"Deactive"}</td>
                </tr>
           `);
            })

        }
    )
    
}

//Post Data to Server
const PostAPI= async (data)=>{
    await $.ajax({
        type:"POST",
        url:postUrl,
        data:data,
        success:(res)=>{
            console.log(res)
        }
    })
}
