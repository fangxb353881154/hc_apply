/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.agent.service;

import java.util.List;

import com.google.common.collect.Lists;
import com.thinkgem.jeesite.common.config.Global;
import com.thinkgem.jeesite.common.service.TreeService;
import com.thinkgem.jeesite.common.utils.StringUtils;
import com.thinkgem.jeesite.modules.sys.entity.Office;
import com.thinkgem.jeesite.modules.sys.entity.Role;
import com.thinkgem.jeesite.modules.sys.entity.User;
import com.thinkgem.jeesite.modules.sys.service.SystemService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thinkgem.jeesite.common.persistence.Page;
import com.thinkgem.jeesite.modules.agent.entity.AgentUser;
import com.thinkgem.jeesite.modules.agent.dao.AgentUserDao;

/**
 * 代理用户Service
 * @author JFang
 * @version 2016-12-14
 */
@Service
@Transactional(readOnly = true)
public class AgentUserService extends TreeService<AgentUserDao, AgentUser> {

	@Autowired
	private SystemService systemService;

	public AgentUser get(String id) {
		return super.get(id);
	}
	
	public List<AgentUser> findList(AgentUser agentUser) {
		return super.findList(agentUser);
	}
	
	public Page<AgentUser> findPage(Page<AgentUser> page, AgentUser agentUser) {
		return super.findPage(page, agentUser);
	}
	
	@Transactional(readOnly = false)
	public void save(AgentUser agentUser) {
		User user = agentUser.getUser();
		if (StringUtils.isNotEmpty(agentUser.getId())) {
			User oldUser = systemService.getUser(agentUser.getId());
			BeanUtils.copyProperties(user, oldUser);

			systemService.saveUser(oldUser);
		}else{
			List<Role> roles = Lists.newArrayList();
			//默认角色ID
			roles.add(new Role(Global.getConfig("daiLi.role.id")));
			user.setRoleList(roles);
			user.setCompany(new Office("1"));
			systemService.saveUser(user);//生成登录用户
			agentUser.setId(user.getId());
			agentUser.setIsNewRecord(true);//自定义ID
		}
		//保存代理
		super.save(agentUser);
	}
	
	@Transactional(readOnly = false)
	public void delete(AgentUser agentUser) {
		super.delete(agentUser);
		systemService.deleteUser(agentUser.getUser());
	}
	
}