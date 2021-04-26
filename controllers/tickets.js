const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req,res){
    var flightId = req.params.id;
    console.log(req.params.id);
    res.render('tickets/new', {title: 'Add Ticket', flightId
    });
}

function create(req,res){
    console.log(req.params.id);
    Flight.findById(req.params.id, function(err,flight){
        Ticket.create(req.body,function(err,ticket){
            if(err) return redirect(`/flights/${flight._id}/tickets/new`);
            res.redirect(`/flights/${flight._id}`);
        });
    
    });
}
