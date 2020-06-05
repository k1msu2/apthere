package kr.sc.ah;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String main() {
		return "jinmain";
	}

	@RequestMapping("/main")
	public String main2() {
		return "main";
	}
	
	@RequestMapping("/test")
	public String test2() {
		return "test";
	}

	@RequestMapping("/slide")
	public String slide() {
		return "slide";
	}

}
