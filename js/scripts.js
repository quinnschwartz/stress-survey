$(document).ready(function() {
  $("form#stress_survey").submit(function(event){
  event.preventDefault();

      $('#stress_survey').hide();

      var answers = [];
      $("input:checkbox[name=warning-signs]:checked").each(function(){
        var warningSign = parseInt($(this).val());
        // $('#responseStress').append(warningSign + "<br>");
        answers.push(warningSign);
      });

      $("input:checkbox[name=symptoms]:checked").each(function(){
        var symptoms = parseInt($(this).val());
        // $('#responseSuperStress').append(symptoms + "<br>");
        answers.push(symptoms);
      });

      $("input:checkbox[name=attempt-methods]:checked").each(function(){
        var attemptMethods = parseInt($(this).val());
        // $('#responseNoStress').append(attemptMethods + "<br>");
        answers.push(attemptMethods);
      });

      var finalAnswer = answers.reduce(function(a, b) {
        return a + b;
        }, 0);

      var result = function() {
        if (finalAnswer <= 3) {
          return ("You don't seem very stressed out at all.  Congratulations!  Keep doing what you're doing...");
        } else if (finalAnswer > 9) {
          return ("You seem really, really stressed out.  We recommend that you chill out and check out some of these resources:");
        } else {
          return ("You seem sort of stressed out.  We recommend that you check out some of these resources:");
        }
      };
    $("#output").text(result);
    $("#response").show();
  });
});

// $("#responseNoStress").show();
// $("#responseStress").show();
// $("#responseSuperStress").show();
