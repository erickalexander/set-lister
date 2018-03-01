class Api::V1::PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:show,:update,:destroy]

  def index
    @playlists = Playlist.all
    render json: @playlists, status: 200
  end

  def create
    @playlist = Playlist.create(playlist_params)
    render json: @playlist, status: 201
  end

  def update
    @playlist.update(playlist_params)
    render json: @playlist, status: 200
  end

  def destroy
    noteId = @playlist.id
    @playlist.destroy
    render json: {message:" Playlist deleted", playlistId:playlistId}
  end

  def show
    render json: @playlist, status: 200
  end

  private
  def playlist_params
    params.permit(:name, :songs, :user_id)
  end

  def set_playlist
    @playlist = PLaylist.find(params[:id])
  end
end
