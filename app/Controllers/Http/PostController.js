'use strict';

const Post = use('App/Models/Post');
const { validate } = use('Validator');

class PostController {
  async index ({ request, response, view }) {
    const posts = await Post.all();
    return view.render('home', { posts: posts.toJSON() });
  }

  async create ({ request, response, view }) {
    return view.render('posts.create');
  }

  async store ({ request, response, view, session }) {
    const postData = request.only(['title', 'content']);
    const rules = {
      title: 'required',
      content: 'required'
    };
    const validation = await validate(request.all(), rules);

    if (validation.fails()) {
      session
              .withErrors(validation.messages())
              .flashExcept(['password']);

      return response.redirect('back');
    }

    await Post.create(postData);
    response.redirect('/');
  }

  async show ({ request, response, view, params }) {
    const post = await Post.find(params.id);
    return view.render('posts.show', { post: post.toJSON() });
  }
}

module.exports = PostController;
