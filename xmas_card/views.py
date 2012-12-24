from django.conf import settings
from django.shortcuts import render_to_response
from django.template import RequestContext


def home(request): 
    return render_to_response('home.html', {
        'msg': request.GET.get('msg', settings.XMAS_MSG),
        'speed': request.GET.get('speed', settings.XMAS_SPEED),
        'numCols': request.GET.get('cols', settings.XMAS_NUM_COLS),
    }, context_instance=RequestContext(request))

