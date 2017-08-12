do
  local _class_0
  local _base_0 = {
    draw = function(self)
      return love.graphics.printf(self.text, self.x, self.y, self.limit)
    end
  }
  _base_0.__index = _base_0
  _class_0 = setmetatable({
    __init = function(self, text, x, y, limit)
      self.text, self.x, self.y, self.limit = text, x, y, limit
    end,
    __base = _base_0,
    __name = nil
  }, {
    __index = _base_0,
    __call = function(cls, ...)
      local _self_0 = setmetatable({}, _base_0)
      cls.__init(_self_0, ...)
      return _self_0
    end
  })
  _base_0.__class = _class_0
  return _class_0
end
