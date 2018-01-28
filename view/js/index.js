$(function(){
    
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3001/",
        dataType: "json",
        data:{
            sql_id:1
        },
        success: function (res) {
            main(res.result);
        },
        error: function () {
            alert("ajax请求错误");
        }
    });

    function main(data){
        for(let i=0;i<data.length;i++){
            var concentData=`<div class="concent">
            <span>${data[i].id}</span>
            <span>${data[i].title}</span>
            <span>${data[i].small_title}</span>
            <span>${data[i].timer}</span>
            <span>${data[i].zuozhe}</span>
            <span>${data[i].concent}</span>
            <div class="concent-mark">
            <p class="concent-mark-a add">新增数据</p>
            <p class="concent-mark-a delete">删除数据</p>
            <p class="concent-mark-a updata">修改数据</p>
            <p class="concent-mark-a close">取消选定</p>
            </div>
        </div>`;
        $('.main').append(concentData)
        }
    }

    /*效果*/
    $(document).on('click','.concent',function(event){   //绑定未来元素，事件委托
        event.stopPropagation();
        $(this).find('.concent-mark').animate({top:'0'},'fast')
    });

    /*取消选定*/
    $(document).on('click','.close',function(event){
        event.stopPropagation();
        $(this).parent().animate({top:'100%'},'fast')
    })
    
})