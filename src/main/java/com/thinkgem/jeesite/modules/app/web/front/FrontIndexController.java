package com.thinkgem.jeesite.modules.app.web.front;

import com.thinkgem.jeesite.common.config.Global;
import com.thinkgem.jeesite.common.utils.StringUtils;
import com.thinkgem.jeesite.common.web.BaseController;
import com.thinkgem.jeesite.modules.app.entity.AppUser;
import com.thinkgem.jeesite.modules.app.service.AppUserService;
import com.thinkgem.jeesite.modules.app.utils.SignUtils;
import com.thinkgem.jeesite.modules.sys.entity.User;
import com.thinkgem.jeesite.modules.sys.utils.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Pattern;

/**
 * Created by Administrator on 2016/12/2.
 */
@Controller
@RequestMapping(value = "/apply")
public class FrontIndexController extends BaseController {

    @Autowired
    private AppUserService appUserService;

    @RequestMapping(value = "index.html", method = RequestMethod.POST)
    public String indexPost(HttpServletRequest request, HttpServletResponse response) {
        String applyUrl = Global.getConfig("apply.url");//默认自己的

        String phone = request.getParameter("phone");
        String name = request.getParameter("name");
        String dl = request.getParameter("dl");
        Pattern p = Pattern.compile("^1[34578]\\d{9}$");

        if (StringUtils.isEmpty(phone) || !p.matcher(phone).matches()) {
            try {
                response.sendRedirect(applyUrl);
            } catch (IOException e) {
                e.printStackTrace();
            }
            return null;
        }

        AppUser appUser = new AppUser();
        appUser.setPhone(phone);
        appUser.setName(name);

        //找不到该代理->默认超级管理员
        User user = UserUtils.get(dl);
        if (user == null) {
            logger.info("========================= 未获取到 用户: "+ dl+"     =================");
            user = UserUtils.get("1");
        }
        appUser.setUser(user);

        //获取该代理所在部门的 二维码地址
        if (user != null && user.getOffice() != null && StringUtils.isNotEmpty(user.getOffice().getQrCodeUrl())) {
            applyUrl = user.getOffice().getQrCodeUrl();
        }

        appUserService.save(appUser);
        try {
            response.sendRedirect(applyUrl);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


    @RequestMapping(value = "wx", method = RequestMethod.GET)
    public String indexGet(HttpServletRequest request, HttpServletResponse response) {
        // 微信加密签名
        String signature = request.getParameter("signature");
        // 时间戳
        String timestamp = request.getParameter("timestamp");
        // 随机数
        String nonce = request.getParameter("nonce");
        // 随机字符串
        String echostr = request.getParameter("echostr");
        logger.info("------------ signature : " + signature + " ,     timestamp: " + timestamp + " ,         nonce: " + nonce + " ,        echostr: " + echostr);
        if (SignUtils.checkSignature(signature, timestamp, nonce)) {
            PrintWriter out = null;
            try {
                out = response.getWriter();
                out.write(echostr);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }


}
