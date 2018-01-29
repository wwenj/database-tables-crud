$(function () {
    ajaxData();
    
/*ajax请求函数*/
    function ajaxData(sql_id,id) {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:3001/",
            dataType: "json",
            data: {
                sql_id: sql_id,
                id:id
            },
            success: function (res) {
                main(res.result);
            },
            error: function () {
                alert("ajax请求错误");
            }
        });
    }

/*数据拼接到文档*/
    function main(data) {
        for (let i = 0; i < data.length; i++) {
            var concentData = `<div class="concent">
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
            $('.concent-box').append(concentData)
            // $('.concent-box').html(concentData)
        }
    }

    /*动画效果——遮罩层*/
    $(document).on('click', '.concent', function (event) { //绑定未来元素，事件委托
        event.stopPropagation();
        $(this).find('.concent-mark').animate({
            top: '0'
        }, 'fast')
    });

    /*取消选定*/
    $(document).on('click', '.close', function (event) {
        event.stopPropagation();
        $(this).parent().animate({
            top: '100%'
        }, 'fast')
    });

    /*删除选定 */
    $(document).on('click', '.delete', function (event) {
        event.stopPropagation();
        var id=this.parentNode.parentNode.innerText.substr(0, 1);
        console.log(id)
        ajaxData(2,id)
        $('.concent-box').html("")
    })

})