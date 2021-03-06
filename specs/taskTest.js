var assert = require("assert");
var Task = require("../task.js");

describe("Task", function() {

  var hero1;

  beforeEach("Setup", function() {
    task1 = new Task("easy", "low", 15);
  });

  it("should have difficultyLevel", function() {
  assert.strictEqual(task1.difficultyLevel, "easy");
  });

  it("should have urgencyLevel", function() {
  assert.strictEqual(task1.urgencyLevel, "low");
  });

  it("should have reward", function() {
  assert.strictEqual(task1.reward, 15);
  });

  it("isComplete starts false", function() {
  assert.strictEqual(task1.isComplete, false);
  });

  it("isComplete can be made true", function() {
    task1.completeTask();
    assert.strictEqual(task1.isComplete, true);
  });

});
