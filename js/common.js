/**
 * TODO: 샌드포토에서 임시 복사
 */
$(window).on("load", function () {
    // includehtml
    includeHTML();

    // 사이드메뉴
    $('.btn-menu').on('click', function () {
        if ($('#header').hasClass('open-menu')) {
            $('#header').removeClass('open-menu');
        } else {
            $('#header').addClass('open-menu');
        }
    });

    // 서브메뉴
    $('.menu-has-children > a').on('click', function () {
        if ($('.small-nav-list .menu-has-children').hasClass('on')) {
            $('.small-nav-list .menu-has-children').removeClass('on');
            $(this).parents('.menu-has-children').find('.submenu').stop().slideUp();
        } else {
            $(this).parents('.menu-has-children').addClass('on');
            $(this).parents('.menu-has-children').find('.submenu').stop().slideDown();
        }
        return;
    });

    // pc 메뉴
    $('.nav-list .submenu').hide();
    $('.nav-list > li.menu-has-children').mouseenter(function () {
        $(this).find('.submenu').stop().fadeToggle(200);
        $('.submenu-bg').stop().fadeToggle(200);
    });
    $('.nav-list > li.menu-has-children').mouseleave(function () {
        $(this).find('.submenu').stop().fadeToggle(200);
        $('.submenu-bg').stop().fadeToggle(200);
    });

    // pc툴팁
    $('.form-group h3 span i').mouseenter(function (){
         $(this).parents('.form-group').find('.pc-toolTip').css('display','block');
    });
    $('.form-group h3 span i').mouseleave(function (){
        $(this).parents('.form-group').find('.pc-toolTip').css('display','none');
    });

    //mobile 툴팁
    $('.cont-title .guide').click(function (){
        $('.layer-popup').css('display','block');
    });

    $('.tipClose').click(function (){
        $('.layer-popup').css('display','none');
    });


    // 눈표시 클릭 시 패스워드 보이기
    $('.eyes').on('click', function () {
        $(this).parents('.active-group').toggleClass('active');
        if ($(this).parents('.active-group').hasClass('active') == true) {
            $(this).find('.fa-eye').attr('class', "fa fa-eye-slash").parents('.complete-input').find('#password').attr('type', "text");
            $(this).siblings('.form-control').attr('type', 'text');
            // $('.active-group .form-control').attr('type','text');
        } else {
            $(this).find('.fa-eye-slash').attr('class', "fas fa-eye").parents('.complete-input').find('#password').attr('type', 'password');
            $(this).siblings('.form-control').attr('type', 'password');
        }
    });

    // 예약하기 날짜 클릭 이벤트
    $('#datePicker td').not('.disabled').on("click", function () {
        $('#datePicker td').removeClass('selected');
        $(this).addClass('selected');
    });

    // 예약하기 시간 클릭 이벤트
    $('.reservation-time .reservation-time-item').not('.disabled').on("click", function () {
        $('.reservation-time .reservation-time-item').removeClass('selected');
        $(this).addClass('selected');
        var selectTime = $(this).text();
        $('.reservation-time-complete .r-time').text(selectTime);
        $('.reservation-time-complete').addClass('active');
    });

    // 예약하기 장소 클릭 이벤트
    $('.reservation-location-item').on("click", function () {
        $('.reservation-location-item').removeClass('selected');
        $(this).toggleClass('selected');
    });

    // 예약내역 탭 이벤트
    $('.reservation-tab li').on("click", function () {
        $('.reservation-tab li').removeClass('selected');
        $('.reservation-tab li').removeClass('border-del');
        $(this).addClass('selected');
        $(this).prev().addClass('border-del')

        $('.reservation-info-list').removeClass('active');
        var tabSelectNumber = $('.reservation-tab li.selected').index();
        if (tabSelectNumber == 0) {
            document.querySelectorAll('.reservation-info-list')[0].classList.add('active');
        } else if (tabSelectNumber == 1) {
            document.querySelectorAll('.reservation-info-list')[1].classList.add('active');
        } else if (tabSelectNumber == 2) {
            document.querySelectorAll('.reservation-info-list')[2].classList.add('active');
        }
    });

    // 체크박스 전체동의 이벤트
    $('.check-all').on("click", function () {
        if ($('.check-all').prop('checked')) {
            $('.check-item').prop('checked', true);
        } else {
            $('.check-item').prop('checked', false)
        }
    });

    $('.check-item').on("click", function () {
        var checkAll = $('.check-item')
        var checkCount = checkAll.length;

        if ($('.check-item:checked').length == checkCount) {
            $('.check-all').prop('checked', true);
        } else {
            $('.check-all').prop('checked', false);
        }
    })

    function btnActive() {
        setInterval(function () {
            // 이미지 체크박스 여부
            var checkconfirm = $('.btn-check').length;
            if (checkconfirm != 0) {
                // 나의 사진 버튼 활성화
                var imgCheckLength = $('input[type=checkbox]:checked').length;
                if (imgCheckLength > 1) {
                    $('.btn-fixed .btn').addClass('active');
                } else {
                    $('.btn-fixed .btn').removeClass('active');
                }
            }

            // 수정 의견 등록 등록하기 이벤트
            var myTextConfirm = $('.myphoto textarea').length;
            if (myTextConfirm != 0) {
                if ($('.myphoto textarea').val().length == 0) {
                    $('.btn-fixed .btn').removeClass('active');
                } else if ($('.myphoto textarea').val().length > 0) {
                    $('.btn-fixed .btn').addClass('active');
                }
            }


            // 휴대폰번호변경 버튼 활성화
            var phoneConfrim = $('.phone-check').length;
            if (phoneConfrim != 0) {
                if ($('.phone-check').val().length == 11) {
                    $('.btn-fixed').addClass('active');
                } else {
                    $('.btn-fixed').removeClass('active');
                }
            }

            // 모달
            // 사진 셀렉 alert show 이벤트
            $('.btn-select.active').on("click", function () {
                $('#select-01').modal('show');
            })
            // 사진 컨펌 alert show 이벤트 1
            $('.btn-confirm.active').on("click", function () {
                $('#confirm-01').modal('show');
            })

            // 사진 컨펌 alert show 이벤트 2
            $('#confirm-01 .btn-confirm-02').on("click", function () {
                $('#confirm-01').modal('hide');
                $('#confirm-02').modal('show');
            })
            $('.btn-hide').on("click", function () {
                $('.modal').modal('hide');
            })

            $('.img-detail').on("click", function () {
                $('#img-detail-01').modal('show');
                var imgSrc = $(this).attr("src");

                $('#img-detail-01 img').attr("src", imgSrc);
            })

            $('.btn-confirm-text.active').on("click", function () {
                $('#edit-01').modal('show');
            })

            // 모달 약관
            $('.more.use').on("click", function () {
                $('#use').modal('show');
            });
            $('.more.privacy-01').on("click", function () {
                $('#privacy-01').modal('show');
            });
            $('.more.privacy-02').on("click", function () {
                $('#privacy-02').modal('show');
            });


        }, 200);
    }

    btnActive();


    // 로그아웃
    $('#btnLogout').on("click", function () {
        $('.logout, .dim').addClass('active');
    })
    $('.logout-btn-list button').on("click", function () {
        $('.logout, .dim').removeClass('active');
    })

    // 약관 이벤트
    $('.card-header > div').on("click", function () {
        if ($(this).parents('.card-header').hasClass('show')) {
            $(this).parents('.card-header').removeClass('show');
        } else {
            $('.card-header').removeClass('show');
            $(this).parents('.card-header').addClass('show');


            setTimeout(() => {
                var c_Scroll = $(document).scrollTop();
                var cardHeight = $(this).parents().siblings('.collapse.show').outerHeight() + $(this).outerHeight();
                var moveScroll = c_Scroll + cardHeight;
                $('html,body').animate({
                    scrollTop: moveScroll
                }, 200);
            }, 400);
            console.log("G")
        }
    });

});