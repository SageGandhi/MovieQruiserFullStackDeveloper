package edu.gandhi.prajit.moviecruiser.repository.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Movie")
public class Movie
{
	@Id
	@Column(name = "MovieId")
	private int id;
	@Column(name = "Name")
	private String name;
	@Column(name = "Comments",length=2500)
	private String comments;
	@Column(name = "PosterPath")
	private String posterPath;
	@Column(name = "ReleaseDate")
	private String releaseDate;
	@Column(name = "VoteAverage")
	private float voteAverage;
	@Column(name = "VoteCount")
	private int voteCount;

	/**
	 * @return the id
	 */
	public int getId()
	{
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(int id)
	{
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name)
	{
		this.name = name;
	}

	/**
	 * @return the comments
	 */
	public String getComments()
	{
		return comments;
	}

	/**
	 * @param comments
	 *            the comments to set
	 */
	public void setComments(String comments)
	{
		this.comments = comments;
	}

	/**
	 * @return the posterPath
	 */
	public String getPosterPath()
	{
		return posterPath;
	}

	/**
	 * @param posterPath
	 *            the posterPath to set
	 */
	public void setPosterPath(String posterPath)
	{
		this.posterPath = posterPath;
	}

	/**
	 * @return the releaseDate
	 */
	public String getReleaseDate()
	{
		return releaseDate;
	}

	/**
	 * @param releaseDate
	 *            the releaseDate to set
	 */
	public void setReleaseDate(String releaseDate)
	{
		this.releaseDate = releaseDate;
	}

	/**
	 * @return the voteAverage
	 */
	public float getVoteAverage()
	{
		return voteAverage;
	}

	/**
	 * @param voteAverage
	 *            the voteAverage to set
	 */
	public void setVoteAverage(float voteAverage)
	{
		this.voteAverage = voteAverage;
	}

	/**
	 * @return the voteCount
	 */
	public int getVoteCount()
	{
		return voteCount;
	}

	/**
	 * @param voteCount
	 *            the voteCount to set
	 */
	public void setVoteCount(int voteCount)
	{
		this.voteCount = voteCount;
	}

	@Override
	public String toString()
	{
		return String.format( "Movie [id=%s, name=%s, comments=%s, posterPath=%s, releaseDate=%s, voteAverage=%s, voteCount=%s]", id, name, comments, posterPath, releaseDate, voteAverage, voteCount );
	}

}