class Article < ActiveRecord::Base
	validates_presence_of  :title, :description, :body, :author, :imagelink

	def slug
    title.downcase.gsub(" ", "-")
  end

  def to_param
    "#{id}-#{slug}"
  end

end
