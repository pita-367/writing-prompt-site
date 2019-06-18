from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

#home view
def home_view(request,*args,**kwargs):
    return render(request, "index.html", {})


"""
view removed
#loading page view
def loading_view(request,*args,**kwargs):
    return render(request, "loading.html", {})
""" 
#word prompt view
def prompt_view(request,*args,**kwargs):
    return render(request, "prompt.html", {})