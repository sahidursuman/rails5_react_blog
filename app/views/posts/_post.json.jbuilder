json.extract! post, :id, :title, :slug, :content, :thumb_url, :created_at, :updated_at
json.url post_url(post, format: :json)
