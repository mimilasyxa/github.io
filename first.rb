require 'ruby2d'

set title: "SNAAAAAAKE"
set height:500
set width: 500
@x_vel = 0
@y_vel = 0

tick = 0
prev_coordsX = []
prev_coordsY = []
snake_body = []

snake_body[0] = Square.new(x:0, y:0, size:25, color:"green", z:40)

food =  Square.new(x:100, y:100, size:25, color:"red")

def foodCoords(food)
  food.x = rand(19) * 25
  food.y = rand(19) * 25
end

on :key_down do |event|
  tick = 10
  if event.key == "w"
    @x_vel = 0
    @y_vel = -25
  elsif event.key == "d"
    @x_vel = 25
    @y_vel = 0
  elsif event.key == "s"
    @x_vel = 0
    @y_vel = 25
  elsif event.key == "a"
    @x_vel = -25
    @y_vel = 0
  end 
end

update do
  if tick%10 == 0
    if snake_body.length() >= 2
      for i in 1..snake_body.length() - 1
        snake_body[i].x = prev_coordsX[i-1]
        snake_body[i].y = prev_coordsY[i-1]
      end
    end
    if snake_body[0].contains? food.x, food.y
      foodCoords(food)
      snake_body << Square.new(x:prev_coordsX[snake_body.length()-1], y:prev_coordsY[snake_body.length()-1], size:25, color:"green")
    end 
    snake_body[0].x += @x_vel
    snake_body[0].y += @y_vel
    prev_coordsX.unshift(snake_body[0].x)
    prev_coordsY.unshift(snake_body[0].y)
  end
  tick+=1 
end

show