---
title: Don't Use Rails Schema! Use This Instead
date: 2023-07-18 17:23:00 +07:00
description: There are drawbacks if you keep using Rails Schema, one of which is that the database may not be consistent. I will explain in detail here
layout: post
tags: rails ruby sql
uid: dont-use-rails-schema
---

There are two things to note about `schema.rb`

- It is a reflection of the database structure in Ruby.
- It is database-agnostic. This means that no matter what database you use, the syntax and structure will be largely the same.
- Advanced database features are not covered.

`schama.rb` will be very useful when we are faced with a scenario:

- Our application has thousands of migration files. This causes a lot of wasted time because it takes a long time to set up a new environment.
- The migration files may contain code that is only compatible with the old version of the database. Therefore, it will fail when executed.

Running `rails db:setup` is the quickest solution to both (or more) of these problems. This command will build the database from `schema.rb`.

But what if the database has complex logic that is not captured in `schema.rb`? The solution is to use `structure.sql`

## Advantages of `structure.sql`
The advantage of using `structure.sql` is that it will copy the structure of the database exactly, including functions, views, constraints, stored procedures, etc., which is not possible with `schema.rb`.

## Switch from `schema.rb` to `structure.sql`

Open the `config/application.rb` file

```ruby
module YourApp
  class Application < Rails::Application
    config.load_defaults x.x

    # Add this line:
    config.active_record.schema_format = :sql
  end
end
```

Then run `rails db:migrate` and the file `db/structure.sql` will be generated. When we run the `rails db:setup` command it no longer uses `schema.rb` but uses `structure.sql`.
