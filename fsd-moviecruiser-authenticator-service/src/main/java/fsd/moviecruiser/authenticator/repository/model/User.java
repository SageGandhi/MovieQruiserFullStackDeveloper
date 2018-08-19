package fsd.moviecruiser.authenticator.repository.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class User {
	@Override
	public String toString() {
		return String.format("User [UserId=%s, FullName=%s]", userId, fullName);
	}

	@Id
	private String userId;
	private String fullName;
	private String password;
	@CreationTimestamp
	private Date creationTime;

	public User(String userId, String fullName, String password) {
		this.userId = userId;
		this.fullName = fullName;
		this.password = password;
	}

	public User() {
	}

	/**
	 * @return the userId
	 */
	public final String getUserId() {
		return userId;
	}

	/**
	 * @param userId
	 *            the userId to set
	 */
	public final void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * @return the fullName
	 */
	public final String getFullName() {
		return fullName;
	}

	/**
	 * @param fullName
	 *            the fullName to set
	 */
	public final void setFullName(String fullName) {
		this.fullName = fullName;
	}

	/**
	 * @return the password
	 */
	public final String getPassword() {
		return password;
	}

	/**
	 * @param password
	 *            the password to set
	 */
	public final void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the creationTime
	 */
	public final Date getCreationTime() {
		return creationTime;
	}

	/**
	 * @param creationTime
	 *            the creationTime to set
	 */
	public final void setCreationTime(Date creationTime) {
		this.creationTime = creationTime;
	}
}
