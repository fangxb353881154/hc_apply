/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.app.dao;

import com.thinkgem.jeesite.common.persistence.CrudDao;
import com.thinkgem.jeesite.common.persistence.annotation.MyBatisDao;
import com.thinkgem.jeesite.modules.app.entity.AppUser;

/**
 * app客户信息DAO接口
 * @author JFang
 * @version 2016-12-02
 */
@MyBatisDao
public interface AppUserDao extends CrudDao<AppUser> {
	
}