/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.agent.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.thinkgem.jeesite.modules.sys.entity.Office;
import com.thinkgem.jeesite.modules.sys.entity.User;
import com.thinkgem.jeesite.modules.sys.service.SystemService;
import com.thinkgem.jeesite.modules.sys.utils.UserUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.thinkgem.jeesite.common.config.Global;
import com.thinkgem.jeesite.common.persistence.Page;
import com.thinkgem.jeesite.common.web.BaseController;
import com.thinkgem.jeesite.common.utils.StringUtils;
import com.thinkgem.jeesite.modules.agent.entity.AgentUser;
import com.thinkgem.jeesite.modules.agent.service.AgentUserService;

import java.util.List;
import java.util.Map;

/**
 * 代理用户Controller
 * @author JFang
 * @version 2016-12-14
 */
@Controller
@RequestMapping(value = "${adminPath}/agent/user")
public class AgentUserController extends BaseController {

	@Autowired
	private AgentUserService agentUserService;
	@Autowired
	private SystemService systemService;
	
	@ModelAttribute
	public AgentUser get(@RequestParam(required=false) String id) {
		AgentUser entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = agentUserService.get(id);
		}
		if (entity == null){
			entity = new AgentUser();
		}
		return entity;
	}

	@RequiresPermissions("agent:agentUser:view")
	@RequestMapping(value = {"index"})
	public String index(){
		return "modules/agent/agentUserIndex";
	}


	@ResponseBody
	@RequestMapping(value = "treeData")
	public List<Map<String, Object>> treeData(){
		List<Map<String, Object>> resultList = Lists.newArrayList();
		AgentUser agentUser = agentUserService.get(UserUtils.getUser().getId());
		if (agentUser != null) {
			//获取所有子级
			AgentUser au = new AgentUser();
			au.setParentIds(agentUser.getParentIds());
			au.setId(agentUser.getId());
			List<AgentUser> agentUserList = agentUserService.findList(au);
			for(int i = 0 ; i< agentUserList.size(); i++) {
				AgentUser aUser = agentUserList.get(i);

				Map<String, Object> map = Maps.newHashMap();
				map.put("id", aUser.getId());
				map.put("pId", aUser.getParent().getId());
				map.put("pIds", aUser.getParentIds());
				map.put("name", aUser.getUser().getName());

				if (i == 0) {
					map.put("pId", "0");
				}
				resultList.add(map);
			}
		}
		System.out.println(JSON.toJSONString(resultList));


		return resultList;
	}

	
	@RequiresPermissions("agent:agentUser:view")
	@RequestMapping(value = {"list", ""})
	public String list(AgentUser agentUser, HttpServletRequest request, HttpServletResponse response, Model model) {
		AgentUser au = new AgentUser();
		if (agentUser == null || StringUtils.isEmpty(agentUser.getParentIds())) {
			agentUser = agentUserService.get(UserUtils.getUser().getId());
		}
		au.setParentIds(agentUser.getParentIds());
		au.setId(agentUser.getId());
		Page<AgentUser> page = agentUserService.findPage(new Page<AgentUser>(request, response), au);
		model.addAttribute("page", page);
		return "modules/agent/agentUserList";
	}

	@RequiresPermissions("agent:agentUser:view")
	@RequestMapping(value = "form")
	public String form(AgentUser agentUser, Model model) {
		if (agentUser.getParent() == null || agentUser.getParent().getId() == null) {
			agentUser.setParent(new AgentUser(UserUtils.getUser().getId()));
		}
		agentUser.setParent(agentUserService.get(agentUser.getParent().getId()));

		model.addAttribute("agentUser", agentUser);
		if (agentUser != null && StringUtils.isNotEmpty(agentUser.getId())) {
			model.addAttribute("user", UserUtils.get(agentUser.getId()));
		}
		return "modules/agent/agentUserForm";
	}

	@RequiresPermissions("agent:agentUser:edit")
	@RequestMapping(value = "save")
	public String save(AgentUser agentUser, Model model, RedirectAttributes redirectAttributes, HttpServletRequest request) {
		String officeId = request.getParameter("user.office.id");
		User parentUser = systemService.getUser(agentUser.getParent().getId());//获取上级代理
		if (StringUtils.isEmpty(officeId) || !StringUtils.equals(officeId,parentUser.getOffice().getId())){
			officeId = parentUser.getOffice().getId();
		}

		agentUser.getUser().setOffice(new Office(officeId));
		// 如果新密码为空，则不更换密码
		if (StringUtils.isNotBlank(agentUser.getUser().getNewPassword())) {
			agentUser.getUser().setPassword(SystemService.entryptPassword(agentUser.getUser().getNewPassword()));
		}

		if (!beanValidator(model, agentUser)){
			return form(agentUser, model);
		}
		if (!"true".equals(checkLoginName(agentUser.getUser().getOldLoginName(), agentUser.getUser().getLoginName()))){
			addMessage(model, "保存代理用户'" + agentUser.getUser().getLoginName() + "'失败，登录名已存在");
			return form(agentUser, model);
		}
		agentUserService.save(agentUser);
		addMessage(redirectAttributes, "保存代理成功");
		return "redirect:"+Global.getAdminPath()+"/agent/user/?repage";
	}
	
	@RequiresPermissions("agent:agentUser:edit")
	@RequestMapping(value = "delete")
	public String delete(AgentUser agentUser, RedirectAttributes redirectAttributes) {
		if (UserUtils.getUser().getId().equals(agentUser.getId())){
			addMessage(redirectAttributes, "删除代理失败, 不允许删除当前登录用户");
		}else if (User.isAdmin(agentUser.getId())){
			addMessage(redirectAttributes, "删除代理失败, 该用户为超级管理员");
		}else{
			agentUserService.delete(agentUser);
			addMessage(redirectAttributes, "删除代理成功");
		}
		return "redirect:"+Global.getAdminPath()+"/agent/user/?repage";
	}

	public String checkLoginName(String oldLoginName, String loginName) {
		if (loginName !=null && loginName.equals(oldLoginName)) {
			return "true";
		} else if (loginName !=null && systemService.getUserByLoginName(loginName) == null) {
			return "true";
		}
		return "false";
	}

}