/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.agent.dao;

import com.thinkgem.jeesite.common.persistence.CrudDao;
import com.thinkgem.jeesite.common.persistence.TreeDao;
import com.thinkgem.jeesite.common.persistence.annotation.MyBatisDao;
import com.thinkgem.jeesite.modules.agent.entity.AgentUser;

/**
 * 代理用户DAO接口
 * @author JFang
 * @version 2016-12-14
 */
@MyBatisDao
public interface AgentUserDao extends CrudDao<AgentUser>,TreeDao<AgentUser> {
	
}