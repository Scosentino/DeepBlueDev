class BlogPost < ActiveRecord::Base
	validates_presence_of  :title, :description, :body, :author
end
