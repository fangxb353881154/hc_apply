/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.app.service;

import java.util.Date;
import java.util.List;

import com.thinkgem.jeesite.modules.agent.entity.AgentUser;
import com.thinkgem.jeesite.modules.agent.service.AgentUserService;
import com.thinkgem.jeesite.modules.sys.entity.User;
import com.thinkgem.jeesite.modules.sys.utils.UserUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thinkgem.jeesite.common.persistence.Page;
import com.thinkgem.jeesite.common.service.CrudService;
import com.thinkgem.jeesite.modules.app.entity.AppUser;
import com.thinkgem.jeesite.modules.app.dao.AppUserDao;

/**
 * app客户信息Service
 * @author JFang
 * @version 2016-12-02
 */
@Service
@Transactional(readOnly = true)
public class AppUserService extends CrudService<AppUserDao, AppUser> {

	@Autowired
	private AgentUserService agentUserService;

	public AppUser get(String id) {
		return super.get(id);
	}
	
	public List<AppUser> findList(AppUser appUser) {

		return super.findList(appUser);
	}
	
	public Page<AppUser> findPage(Page<AppUser> page, AppUser appUser) {
		User user = appUser.getUser();
		if (user == null || StringUtils.isEmpty(user.getId())) {
			user = UserUtils.getUser();
		}
		AgentUser agentUser = agentUserService.get(user.getId());
		String whereSql = "  and ( u.id='" + user.getId() + "' or ua.parent_ids like '"+agentUser.getParentIds()+agentUser.getId()+",%' )";
		// 生成数据权限过滤条件（dsf为dataScopeFilter的简写，在xml中使用 ${sqlMap.dsf}调用权限SQL）
		appUser.getSqlMap().put("dsf", whereSql);
		// 设置分页参数
		appUser.setPage(page);
		// 执行分页查询
		page.setList(findList(appUser));
		return page;
	}
	
	@Transactional(readOnly = false)
	public void save(AppUser appUser) {
		AppUser u = get(appUser.getPhone());
		if (u == null) {
			appUser.setCreateDate(new Date());
			dao.insert(appUser);
		}
		//super.save(appUser);
	}
	
	@Transactional(readOnly = false)
	public void delete(AppUser appUser) {
		super.delete(appUser);
	}
	
}