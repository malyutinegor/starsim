local a=require('scripts/classes/rectangle')local b=require('scripts/classes/circle')local c=require('scripts/classes/image')local d;d=function()end;local e;e=function()end;love.load=function()love.window.setTitle('GAME')love.graphics.setBackgroundColor(0,0,0)g={}g.hero=a()g.enemy=b()g.pressed=love.keyboard.isDown;image=c({path="resources/images/sprites/star1.png"})end;love.update=function(f)end;love.draw=function()g.hero:draw()g.enemy:draw()return image:draw()end