$(function () {

    ajaxData();
    /*ajax请求函数*/
    function ajaxData(sql_id, id,add_con) {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:3001/",
            dataType: "json",
            data: {
                sql_id: sql_id,
                id: id,
                add_con:add_con
            },
            success: function (res) {
                main(res.result);
            },
            error: function () {
                alert("ajax请求错误");
            }
        });
    }

    /*数据拼接到文档函数*/
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
            <p class="concent-mark-a delete" data-id=${data[i].id}>删除数据</p>
            <p class="concent-mark-a updata">修改数据</p>
            <p class="concent-mark-a close">取消选定</p>
            </div>
        </div>`;
            $('.concent-box').append(concentData)
            // $('.concent-box').html(concentData)
        }
    }

    //新增数据弹出层函数
    function addMark(px) {
        $(".add-mark-box").fadeToggle("slow");
        $(".add-mark").animate({
            top: px
        });
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
        // var id = this.parentNode.parentNode.innerText.substr(0, 1); //找出id选项内容
        var id=$(this).attr('data-id')
        ajaxData(2, id);
        $('.concent-box').html(""); //删除操作后原内容清楚，重新查询并拼接字符串
    });

    /*新增数据*/
    $(document).on('click', '.add', function (event) {
        event.stopPropagation();
        addMark('0');
    });

    //新增数据弹出层关闭
    $('.btn-close').on('click', function (event) {
        event.stopPropagation();
        addMark('-100%');
        $('.close').trigger("click");//自动触发取消选定事件
    });

    //新增数据弹出层确认
    $('.btn-on').on('click', function (event) {
        event.stopPropagation();
        addMark('-100%');   //弹出层消失效果
        $('.close').trigger("click");//自动触发取消选定事件
        
        var add_con=[];
        for(let i=0;i<6;i++){   //获取所有输入数据push到数组
            add_con.push($('.add-input').eq(i).val())
        }
        console.log(add_con);
        ajaxData(1, 1,add_con);
        $('.concent-box').html("");
    });
})