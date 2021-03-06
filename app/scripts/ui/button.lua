local button
button = function(x, y, text, click, text2)
  if not text2 then
    local res = game.ui.Element({
      draw = function(self)
        love.graphics.setFont(game.fonts.menu)
        game.color(0, 0, 0, 70)
        love.graphics.print(text, -1, -1)
        love.graphics.print(text, 1, 1)
        if self.hover then
          game.color(255, 255, 255, 150)
        else
          game.color(255, 255, 255, 255)
        end
        return love.graphics.print(text, 0, 0)
      end,
      x = x,
      y = y,
      mousereleased = click,
      tags = {
        "menu"
      }
    })
    res.width = game.fonts.menu:getWidth(text)
    res.height = game.fonts.menu:getHeight()
    res:reshape()
    return res
  else
    local h = game.fonts.menu:getHeight()
    local res = game.ui.Element({
      draw = function(self)
        love.graphics.setFont(game.fonts.menu)
        game.color(0, 0, 0, 70)
        love.graphics.print(text, -1, -1)
        love.graphics.print(text2, -1, h + 9)
        love.graphics.print(text, 1, 1)
        love.graphics.print(text2, 1, h + 11)
        if self.hover then
          game.color(255, 255, 255, 150)
        else
          game.color(255, 255, 255, 255)
        end
        love.graphics.print(text, 0, 0)
        return love.graphics.print(text2, 0, h + 10)
      end,
      x = x,
      y = y,
      mousereleased = click,
      tags = {
        "menu"
      }
    })
    local o = game.fonts.menu:getWidth(text)
    local s = game.fonts.menu:getWidth(text2)
    if o > s then
      res.width = game.fonts.menu:getWidth(text)
    else
      res.width = game.fonts.menu:getWidth(text2)
    end
    res.height = game.fonts.menu:getHeight() * 2
    res:reshape()
    return res
  end
end
return button
