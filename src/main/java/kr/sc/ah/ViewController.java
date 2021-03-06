package kr.sc.ah;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;

import dao.ViewDaoImpl;
import vo.AptVo;
import vo.CatDataVo;
import vo.CenterVo;
import vo.CircleVo;
import vo.DetailAptVo;
import vo.OptionInfoTbVo;
import vo.OptionTbVo;
import vo.OptionVo;

@Controller
public class ViewController {
	
	@Autowired
	ViewDaoImpl dao;
	
	Map<String, String> tbname;
	Map<String, String> infotbname;
	
	public ViewController() {
		tbname = new HashMap<String, String>();
		tbname.put("아파트","apt_tb");
		tbname.put("지하철","station_tb");
		tbname.put("카페","cafe_tb");
		tbname.put("음식점","food_tb");
		tbname.put("편의점","cvs_tb");
		tbname.put("쇼핑","shopping_tb");
		tbname.put("의료","medical_tb");		
		tbname.put("공원","park_tb");
		
		infotbname = new HashMap<String, String>();
		infotbname.put("아파트","aptinfo_tb");
		infotbname.put("지하철","stationinfo_tb");
		infotbname.put("카페","cafeinfo_tb");
		infotbname.put("음식점","foodinfo_tb");
		infotbname.put("편의점","cvsinfo_tb");
		infotbname.put("쇼핑","shoppinginfo_tb");
		infotbname.put("의료","medicalinfo_tb");		
		infotbname.put("공원","parkinfo_tb");
		
	}

	
	@RequestMapping("/gu2/{gu}")
	public ModelAndView view(@PathVariable String gu) {
		System.out.println(gu);
		ModelAndView mav = new ModelAndView();
		CenterVo vo = dao.CenterAll(gu);
		mav.addObject("centerVo", vo);
		mav.setViewName("map2");
		System.out.println(vo);
		return mav;
	}
	
	
	// ajax 로  지역구 리스트 전송
	@ResponseBody
	@RequestMapping(value="/gu",produces="applicaiton/json; charset=UTF-8")
	public String gulist() throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.guListAll()));
		return new ObjectMapper().writeValueAsString(dao.guListAll());
	}
	

	// ajax 로 지역구 내 동 전송
	@ResponseBody
	@RequestMapping(value="/gu/{gu}",produces="applicaiton/json; charset=UTF-8")
	public String gugu(@PathVariable String gu) throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.dongListAll(gu)));
		return new ObjectMapper().writeValueAsString(dao.dongListAll(gu));
	}
	
	
	// ajax 로 지역구 내 동 전송
	@ResponseBody
	@RequestMapping(value="/center/gu/{gu}",produces="applicaiton/json; charset=UTF-8")
	public String gucenter(@PathVariable String gu) throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.CenterAll(gu)));
		return new ObjectMapper().writeValueAsString(dao.CenterAll(gu));
	}
	
	// ajax 로 지역구 내 동 전송
	@ResponseBody
	@RequestMapping(value="/cat1",produces="applicaiton/json; charset=UTF-8")
	public String cat1() throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.catListAll()));
		return new ObjectMapper().writeValueAsString(dao.catListAll());
	}
	
	// ajax 로 지역구 내 동 전송
	@ResponseBody
	@RequestMapping(value="/cat2",produces="applicaiton/json; charset=UTF-8")
	public String cat2() throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.catListAll()));
		return new ObjectMapper().writeValueAsString(dao.catListAll());
	}
	
	// ajax 로 지역구 내 동 전송
	@ResponseBody
	@RequestMapping(value="/cat3",produces="applicaiton/json; charset=UTF-8")
	public String cat3() throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.catListAll()));
		return new ObjectMapper().writeValueAsString(dao.catListAll());
	}
	
	// ajax 로 지역구 내 동 전송
	@ResponseBody
	@RequestMapping(value="/cat1/{catname}",produces="applicaiton/json; charset=UTF-8")
	public String cat1one() throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.catListAll()));
		return new ObjectMapper().writeValueAsString(dao.catListAll());
	}
	
	// ajax 로 지역구 내 동 전송
	@ResponseBody
	@RequestMapping(value="/cat2/{catname}",produces="applicaiton/json; charset=UTF-8")
	public String cat2one() throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.catListAll()));
		return new ObjectMapper().writeValueAsString(dao.catListAll());
	}
	
	// ajax 로 지역구 내 동 전송
	@ResponseBody
	@RequestMapping(value="/cat3/{catname}",produces="applicaiton/json; charset=UTF-8")
	public String cat3one() throws Exception{
		System.out.println(new ObjectMapper().writeValueAsString(dao.catListAll()));
		return new ObjectMapper().writeValueAsString(dao.catListAll());
	}
	
	@ResponseBody
	@RequestMapping(value  = "/cat123option/{no}", produces = "application/json; charset=utf-8")
	public DetailAptVo apt1(@PathVariable("no") int no) {
		DetailAptVo vo = dao.listOneApartment(no);
				
		// return new ObjectMapper().writeValueAsString(vo);
		return vo;
	}
	
	// 한글로 입력받으면 tb명으로 바꾸려고 설정한 소스
	@ResponseBody
	@RequestMapping(value="/cat123option",produces="applicaiton/json; charset=UTF-8")
	public String cat123vo(OptionVo vo) throws Exception{
		System.out.println("cat123option in!!!");
		OptionTbVo tvo = new OptionTbVo();
		tvo.setGu(vo.getGu());
		tvo.setDong(vo.getDong());
		tvo.setCat1tb(tbname.get(vo.getCat1name()));
		tvo.setCat2tb(tbname.get(vo.getCat2name()));
		tvo.setCat3tb(tbname.get(vo.getCat3name()));
				
		if(vo.getGu().equals("전 체")) return new ObjectMapper().writeValueAsString(dao.listOptionTbSeoul(tvo));
		else {
			if(vo.getDong().equals("전 체"))	return new ObjectMapper().writeValueAsString(dao.listOptionTbGu(tvo));	
			else return new ObjectMapper().writeValueAsString(dao.listOptionTbDong(tvo));
		}
	}
	
	@ResponseBody
	@RequestMapping(value="/cat1pos",produces="applicaiton/json; charset=UTF-8")
	public String cat1pos(OptionVo vo) throws Exception{
		System.out.println("cat1pos in!!!");
		OptionInfoTbVo vo1 = new OptionInfoTbVo();
		vo1.setGu(vo.getGu());
		vo1.setCattb(tbname.get(vo.getCat1name()));
		vo1.setCatinfotb(infotbname.get(vo.getCat1name()));
		System.out.println(vo1);		
		List<CatDataVo> list1 = dao.categoryList(vo1);
		return new ObjectMapper().writeValueAsString(list1);
	}
	

	
	@ResponseBody
	@RequestMapping(value="/cat2pos",produces="applicaiton/json; charset=UTF-8")
	public String cat2pos(OptionVo vo) throws Exception{
		System.out.println("cat2pos in!!!");		
		OptionInfoTbVo vo2 = new OptionInfoTbVo();
		vo2.setGu(vo.getGu());
		vo2.setCattb(tbname.get(vo.getCat2name()));
		vo2.setCatinfotb(infotbname.get(vo.getCat2name()));
		List<CatDataVo> list2 = dao.categoryList(vo2);
		return new ObjectMapper().writeValueAsString(list2);
	}
	
	@ResponseBody
	@RequestMapping(value="/cat3pos",produces="applicaiton/json; charset=UTF-8")
	public String cat3pos(OptionVo vo) throws Exception{
		System.out.println("cat3pos in!!!");
		OptionInfoTbVo vo3 = new OptionInfoTbVo();
		vo3.setGu(vo.getGu());
		vo3.setCattb(tbname.get(vo.getCat3name()));
		vo3.setCatinfotb(infotbname.get(vo.getCat3name()));
		List<CatDataVo> list3 = dao.categoryList(vo3);
		return new ObjectMapper().writeValueAsString(list3);
	}
	
}
