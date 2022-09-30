/*
* Create the html timeline div
*/

var TL = {};

TL.timelineId;
TL.content;

Element.prototype.timeline = function (content) {
    if (!content) {
        return;
    }
    TL.el = this;
    
    TL.timelineId = document.getElementById(TL.el.getAttribute("id"));
    TL.content = content.content;

    TL.utils.init();
};

TL.utils = {
    init: function() {
        var timeline = document.createElement("div");
        timeline.setAttribute("class", "timeline");

        var line = document.createElement("div");
        line.setAttribute("class", "line");

        timeline.appendChild(line);

        for (i=0; i < TL.content.length; i++) {
            var contentHeading = document.createElement("h2");
            var headingText = document.createTextNode(TL.content[i].heading);
            var contentParagraph = document.createElement("p");
            var paragraphText = document.createTextNode(TL.content[i].text);
            var timelineContent = document.createElement("div");
            timelineContent.setAttribute("class", "content");
            var bead = document.createElement("div");
            bead.setAttribute("class", "bead");
            var section = document.createElement("div");
            section.setAttribute("class", "section");

            contentHeading.append(headingText);
            contentParagraph.append(paragraphText);
            timelineContent.append(contentHeading);
            timelineContent.append(contentParagraph);
            section.appendChild(bead);
            section.appendChild(timelineContent);
            timeline.appendChild(section);        
        }
        
        TL.timelineId.appendChild(timeline);
    }
}
