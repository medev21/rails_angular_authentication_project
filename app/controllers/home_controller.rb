class HomeController < ApplicationController
  def home
    render 'homepage', layout: 'application'
  end
end
