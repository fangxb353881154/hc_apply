/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.agent.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.validation.constraints.NotNull;

import com.thinkgem.jeesite.common.persistence.TreeEntity;
import com.thinkgem.jeesite.modules.sys.entity.User;
import org.hibernate.validator.constraints.Length;


/**
 * 代理用户Entity
 * @author JFang
 * @version 2016-12-14
 */
public class AgentUser extends TreeEntity<AgentUser> {
	
	private static final long serialVersionUID = 1L;
	private String bankCard;		// 银行卡
	private String bankOpen;		// 开户行
	private String bankPayee;		// 收款人
	private String lendPersonal;		// 个人放款
	private String lendIts;		// 旗下放款

	private User user;

	public AgentUser() {
		super();
	}

	public AgentUser(String id){
		super(id);
	}

	@JsonBackReference
	@NotNull(message="parent_id不能为空")
	public AgentUser getParent() {
		return parent;
	}

	public void setParent(AgentUser parent) {
		this.parent = parent;
	}

	@Length(min=0, max=255, message="银行卡长度必须介于 0 和 255 之间")
	public String getBankCard() {
		return bankCard;
	}

	public void setBankCard(String bankCard) {
		this.bankCard = bankCard;
	}
	
	@Length(min=0, max=255, message="开户行长度必须介于 0 和 255 之间")
	public String getBankOpen() {
		return bankOpen;
	}

	public void setBankOpen(String bankOpen) {
		this.bankOpen = bankOpen;
	}
	
	@Length(min=0, max=255, message="收款人长度必须介于 0 和 255 之间")
	public String getBankPayee() {
		return bankPayee;
	}

	public void setBankPayee(String bankPayee) {
		this.bankPayee = bankPayee;
	}
	
	public String getLendPersonal() {
		return lendPersonal;
	}

	public void setLendPersonal(String lendPersonal) {
		this.lendPersonal = lendPersonal;
	}
	
	public String getLendIts() {
		return lendIts;
	}

	public void setLendIts(String lendIts) {
		this.lendIts = lendIts;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}