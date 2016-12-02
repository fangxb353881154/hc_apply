package com.thinkgem.jeesite.modules.app.web.front;

import com.thinkgem.jeesite.common.config.Global;
import com.thinkgem.jeesite.common.utils.StringUtils;
import com.thinkgem.jeesite.common.web.BaseController;
import com.thinkgem.jeesite.modules.app.entity.AppUser;
import com.thinkgem.jeesite.modules.app.service.AppUserService;
import com.thinkgem.jeesite.modules.sys.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.regex.Pattern;

/**
 * Created by Administrator on 2016/12/2.
 */
@Controller
@RequestMapping(value="/apply")
public class FrontIndexController extends BaseController {

    @Autowired
    private AppUserService appUserService;

    @RequestMapping(value = "index.html", method = RequestMethod.POST)
    public String indexPost(HttpServletRequest request, HttpServletResponse response) {
        String phone = request.getParameter("phone");
        String name = request.getParameter("name");
        String dl = request.getParameter("dl");
        Pattern p = Pattern.compile("^1[34578]\\d{9}$");
        if (StringUtils.isEmpty(phone) || !p.matcher(phone).matches()) {
            return null;
        }

        AppUser appUser = new AppUser();
        appUser.setPhone(phone);
        appUser.setName(name);
        if (StringUtils.isNotEmpty(dl)) {
            appUser.setUser(UserUtils.get(dl));
        }
        appUserService.save(appUser);
        try {
            response.sendRedirect(Global.getConfig("apply.url"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


}
