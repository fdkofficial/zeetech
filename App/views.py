from django.shortcuts import render,HttpResponse,redirect
from .forms import ContactForms
from .models import InstaPosts
# Create your views here.
def home(request):
    instaposts = InstaPosts.objects.all()
    context ={
        'posts':instaposts
    }
    return render(request,'index.html',context)

def contactus(request):
    form = ContactForms(data=request.POST)
    if form.is_valid():
        form.save()
        return redirect('/')
    else:
        return HttpResponse(form.errors)