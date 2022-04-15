from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
def home(request):
	return render(request, 'home.html')

def start(request):
	username = request.GET.get('username')
	context = {
		'username' : username,
	}
	return render(request, 'start.html', context)

def submit_numbers(request):
	data = {
		'numbers' : request.POST.get('numbers')
	}
	return JsonResponse(data, status=200)