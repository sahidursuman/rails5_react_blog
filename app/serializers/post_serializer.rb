class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :slug, :thumb_url
end
