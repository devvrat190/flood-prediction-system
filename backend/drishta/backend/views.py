from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse  # Correct import
from rest_framework import status
from .serializers import LocationSerializer
from .data_process_backend import model_train_discharge,model_train_rainfall,flood_risk
@api_view(['POST'])
def get_flood_prediction(request):
    serializer = LocationSerializer(data=request.data)
    if serializer.is_valid():
        latitude = serializer.validated_data['latitude']
        longitude = serializer.validated_data['longitude']
        rainfall_data=model_train_rainfall(latitude,longitude)
        discharge_data=model_train_discharge(latitude,longitude)
        risk_data=flood_risk(rainfall_data,discharge_data)
        risk_count=risk_data['Flood_Risk'].value_counts()
        total_days=len(risk_data)
        print(total_days)
        flood_chances={
            'High':(risk_count.get("High",0)/total_days)*100,
            'Moderate':(risk_count.get("Moderate",0)/total_days)*100,
            'Low':(risk_count.get("Low",0)/total_days)*100
        }
        return JsonResponse(flood_chances)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
