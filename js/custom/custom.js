// [MASTER JAVASCRIPT]
//	Project     :	EVENT Page
//	Version     :	1.0
//	Last Change : 	27/02/2017
//	Primary Use :   EVENT HTML Page





const translations ={
	en:{
		english: 'English',
		arabic: 'Arabic',
		title1: 'Planning Preventive Maintenance Frequency ',
		title2: 'Services Description ',
		silver: 'Silver Package',
		silver1:'AC System: 2 / year',
		silver2:'Electrical system: 2 / year ',
		silver3:'Plumbing system: 2 / year ',
		silver4:'call outs per month: x2 ',
		silver5:'Helpdesk: 24/7 ',
		silver6:'Spare Parts: Cost plus 20%',
		silver7:'Spare Parts: Cost plus 20%',
		gold: 'Silver Package',
		gold1:'AC System: 3 / year ',
		gold2:'Electrical system: 3 / year ',
		gold3:'Plumbing system: 3 / year ',
		gold4:'call outs per month: x6 ',
		gold5:'Helpdesk: 24/7 ',
		gold6:'Spare Parts: Cost plus 20%',
		platinum: 'Silver Package',
		platinum1:'AC System: 4 / year ',
		platinum2:'Electrical system: 4 / year ',
		platinum3:'Plumbing system: 4 / year ',
		platinum4:'call outs per month: Unlimited ',
		platinum5:'Helpdesk: 24/7 ',
		platinum6:'Spare Parts: Threshold AED 250',
		discount:'ready for 25% Discount 🎉',
		Studio:'Studio',
		Bedroom1:'1 Bedroom ',
		Bedroom2:'2 Bedroom ',
		Bedroom3:'3 Bedroom ',
		Townhouse1:'Townhouse villa 3 bedrooms ',
		Townhouse2:'Townhouse villa 4 bedrooms',
		Townhouse3:'Townhouse villa 5 bedrooms',
		TVilla1:'TVilla 3 bedrooms',
		TVilla2:'TVilla 4 bedrooms',
		TVilla3:'TVilla 5 bedrooms',
		TVilla4:'TVilla 6 bedrooms',
		TVilla5:'TVilla 7 bedrooms',
		allprice:'All prices excluding 5% VAT',

	},
	ar:{
		english: 'الإنكليزية',
		arabic: 'العربية',
		title1: 'عروض باقات الصيانة السنوية ',
		title2: 'نوع الخدمات ',
		silver: 'الباقة الفضية',
		silver1:'صيانة أنظمة التكييف - سنتان',
		silver2:'صيانة الأنظمة الكهربائية - سنتان',
		silver3:'صيانة التمديدات الصحية - سنتان',
		silver4:'الصيانة الروتينية: عدد الإتصالات الشهرية *2',
		silver5:'خدمة العملاء : 24 ساعة على مدار الأسبوع',
		silver6:'قطع الغيار: التكلفة زائد %20',
		gold: 'الباقة الذهية',
		gold1:'صيانة أنظمة التكييف - ثلاث سنوات',
		gold2:'صيانة الأنظمة الكهربائية - ثلاث سنوات',
		gold3:'صيانة التمديدات الصحية - ثلاث سنوات',
		gold4:'الصيانة الروتينية: عدد الإتصالات الشهرية *6',
		gold5:'خدمة العملاء : 24 ساعة على مدار الأسبوع',
		gold6:'قطع الغيار: التكلفة زائد %20',
		platinum: 'الباقة البلاتينية',
		platinum1:'صيانة أنظمة التكييف - أربع سنوات',
		platinum2:'صيانة الأنظمة الكهربائية - أربع سنوات',
		platinum3:'صيانة التمديدات الصحية - أربع سنوات',
		platinum4:'الصيانة الروتينية: عدد الإتصالات الشهرية *6',
		platinum5:'خدمة العملاء : 24 ساعة على مدار الأسبوع',
		platinum6:'قطع الغيار : الحد 250 درهم',
		discount:'🎉 مستعدون لتخفيضات بقيمة %25',
		Studio:'غرفة أو شقة ذات مساحة ضيقة',
		Bedroom1:'1 غرفة نوم',
		Bedroom2:'2 غرفة نوم',
		Bedroom3:'3 غرفة نوم',
		Townhouse1:'فيلا تاون هاوس 3 غرف',
		Townhouse2:'فيلا تاون هاوس 4 غرف',
		Townhouse3:'فيلا تاون هاوس 5 غرف',
		TVilla1:'فيلا 3 غرف ',
		TVilla2:'فيلا 4 غرف ',
		TVilla3:'فيلا 5 غرف ',
		TVilla4:'فيلا 6 غرف ',
		TVilla5:'فيلا 7 غرف ',
		allprice:'جميع الأسعار باستثناء ضريبة القيمة المضافة بنسبة %5',

	},
};

const langSelector = document.querySelector("select");
langSelector.addEventListener("change", (e) => {
	setLanguage(e.target.value);
});

const setLanguage = (language) =>{
	const elements = document.querySelectorAll("[data-i18n]");
	elements.forEach((element)=>{
		const translationKey = element.getAttribute("data-i18n");
		element.textContent = translations[language][translationKey];
	})
}




function isNumber(evt){ //alert(evt);
			evt = (evt) ? evt : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				return false;
			}
			return true;
		}

$(document).on('ready', function() {	
	"use strict"; //Start of Use Strict
	var menu_bar= $('.navbar-default');
	var menu_li= $('.navbar-default li a');
	var menu_li_1=$(".navbar-nav li a");
	var menu_hover= $('.navbar-default li a:hover');
	var collapse= $('.navbar-collapse');
	var top_nav=$('#top-nav');
	
	if(top_nav.length) {
	//After Scroll Menu Created, Menu Bgcolor and Text Color
    var x = $("#top-nav").offset().top
	if (x > 50) {
        menu_bar.fadeIn().css({"background-color": "#ffffff", "color": "#666666", "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"});
		menu_li.css({"color": "#666666"});			
    }
	else {
		menu_bar.css({"background-color": "transparent", "color": "#ffffff", "box-shadow": "none", "display": "none" });
				
	}	






	
	
	$(document).on('scroll',function() {	
		var y = $(this).scrollTop();   
		if (y > 50) {
			menu_bar.fadeIn().css({"background-color": "#ffffff", "color": "#666666", "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"});
			menu_li.css({"color": "#666666"});		
			
		}
		else {
			menu_bar.css({"background-color": "transparent", "color": "#ffffff", "box-shadow": "none", "display": "none"});
			menu_li.css({"color": "#666666"});
		}
	});
	}
	


		

		
	
	//PRICING BORDER ANIMATION FUNCTION
	$(".pricig-br").on("mouseover", function() {
		
		$(this).find(".pricig-uline").addClass( "pricig-full" );
		
	});	
	$(".pricig-br").on("mouseleave", function() {	
		$(this).find(".pricig-uline").removeClass( "pricig-full" );
	});
	

	
	
		return false;

		// End of use strict
});

