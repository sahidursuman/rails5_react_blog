for i in 0..30
  Post.create({ 
    title: Faker::Lorem.sentence(rand(2..10)).chomp('.'),
    content: Faker::Lorem.paragraphs(rand(1..800)).join
  })
end
